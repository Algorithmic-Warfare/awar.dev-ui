import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from '@/components/ui/navigation-menu'

export function NavigationMenuPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Navigation Menu</h2>
        <p className="text-muted-foreground mt-1">A horizontal navigation bar with dropdown content.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[300px] gap-2 p-2">
                  <NavigationMenuLink href="#">
                    <div className="font-medium">Introduction</div>
                    <p className="text-muted-foreground">Learn the basics of the design system.</p>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <div className="font-medium">Installation</div>
                    <p className="text-muted-foreground">Set up your development environment.</p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[300px] gap-2 p-2">
                  <NavigationMenuLink href="#">
                    <div className="font-medium">Button</div>
                    <p className="text-muted-foreground">Trigger actions and navigate.</p>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="#">
                    <div className="font-medium">Card</div>
                    <p className="text-muted-foreground">Group related content.</p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </section>
  )
}
