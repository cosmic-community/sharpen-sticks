interface StarRatingProps {
  rating: number
  maxStars?: number
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({ rating, maxStars = 5, size = 'md' }: StarRatingProps) {
  const sizeClasses = {
    sm: 'text-sm gap-0.5',
    md: 'text-base gap-0.5',
    lg: 'text-xl gap-1'
  }

  return (
    <div className={`flex items-center ${sizeClasses[size]}`} role="img" aria-label={`${rating} out of ${maxStars} stars`}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <span
          key={index}
          className={index < rating ? 'opacity-100' : 'opacity-25'}
        >
          ⭐
        </span>
      ))}
    </div>
  )
}