import React from 'react'
import { Link } from 'react-router-dom'

interface ScrollToTopLinkProps {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  onClick 
}) => {
  const handleClick = () => {
    if (onClick) onClick()
    
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }, 100)
  }

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default ScrollToTopLink
