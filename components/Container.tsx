import { ReactNode } from "react"

/**
 * Container
 * Wrapper for consistent page padding and max width.
 * Usage:
 *   <Container className="py-12"> ... </Container>
 */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`container-app ${className}`}>{children}</div>
}