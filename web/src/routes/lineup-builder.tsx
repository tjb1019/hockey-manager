import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lineup-builder')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/lineup-builder"!</div>
}
