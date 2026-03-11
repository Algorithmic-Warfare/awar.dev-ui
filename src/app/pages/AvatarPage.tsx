import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export function AvatarPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Avatar</h2>
        <p className="text-muted-foreground mt-1">An image element with a fallback for user profiles.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Image</h3>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Fallback</h3>
        <div className="flex items-center gap-4">
          <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>AW</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>RK</AvatarFallback></Avatar>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <Avatar className="size-6"><AvatarFallback className="text-xs">S</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>MD</AvatarFallback></Avatar>
          <Avatar className="size-12"><AvatarFallback>LG</AvatarFallback></Avatar>
          <Avatar className="size-16"><AvatarFallback>XL</AvatarFallback></Avatar>
        </div>
      </div>
    </section>
  )
}
