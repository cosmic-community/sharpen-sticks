import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import Link from 'next/link'

export const metadata = {
  title: 'Our Team — Sharpen Sticks',
  description: 'Meet the amazing kids behind Sharpen Sticks — the young entrepreneurs crafting sustainable stick pens.'
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-forest-600 to-forest-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-forest-200 mb-2">
              The People Behind the Pens
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Meet Our Team 👋
            </h1>
            <p className="mt-4 text-lg text-forest-100 max-w-2xl mx-auto">
              We&apos;re a crew of creative kids who believe writing should be fun, sustainable, and made with love.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {teamMembers.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">👷‍♂️</span>
            <h2 className="text-2xl font-bold text-bark-900 mb-2">Team page coming soon!</h2>
            <p className="text-bark-500 mb-6">
              We&apos;re still gathering our team bios. Check back soon!
            </p>
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}