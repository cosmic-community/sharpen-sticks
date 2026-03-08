import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const name = member.metadata?.name || member.title
  const role = member.metadata?.role || ''
  const bio = member.metadata?.bio || ''
  const photo = member.metadata?.photo

  return (
    <article className="card overflow-hidden h-full flex flex-col text-center">
      {/* Photo */}
      <div className="relative overflow-hidden bg-gradient-to-br from-forest-100 to-cream-100 aspect-square">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-7xl">🧑‍🎨</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-bark-900">{name}</h3>

        {role && (
          <p className="mt-1 text-sm font-semibold text-forest-600">{role}</p>
        )}

        {bio && (
          <p className="mt-3 text-sm text-bark-500 leading-relaxed flex-1">
            {bio}
          </p>
        )}
      </div>
    </article>
  )
}