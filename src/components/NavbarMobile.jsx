import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { NavLink } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";

export default function NavbarMobile({ navigation = [] }) {
  return (
    <div className="xl:hidden self-center">
      <Sheet className="">
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="z-20">
            <Menu />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-64 bg-background p-4 overflow-y-auto xl:hidden"
        >
          <SheetTitle className="mb-2">Menu</SheetTitle>
          <SheetDescription></SheetDescription>
          <hr />
          <div className="flex flex-col gap-2">
            {navigation?.map((category, index) =>
              !category?.subItems ? (
                <SheetClose key={index} asChild>
                  <NavLink
                    to={category.href}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded py-1 transition-all ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground"
                      }`
                    }
                  >
                    {category.name}
                  </NavLink>
                </SheetClose>
              ) : (
                <Collapsible key={index}>
                  <CollapsibleTrigger className="flex items-center gap-3 rounded py-1 w-full transition-all">
                    {category.name}
                    <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xl">
                      +
                    </span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 flex flex-col gap-1">
                    {category?.subItems.map((item) =>
                      item?.subItems ? (
                        <Collapsible key={item.name}>
                          <CollapsibleTrigger className="flex items-center gap-3 rounded py-1 w-full transition-all">
                            {item.name}
                            <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xl">
                              +
                            </span>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="ml-4 space-y-2">
                            {item?.subItems.map((subItem) => (
                              <SheetClose key={subItem.name} asChild>
                                <NavLink
                                  to={subItem.href}
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 pt-2 w-full ${
                                      isActive
                                        ? "text-primary bg-primary/10"
                                        : "text-foreground"
                                    }`
                                  }
                                  {...(subItem.prefetch
                                    ? { prefetch: "true" }
                                    : {})}
                                >
                                  {subItem.name}
                                </NavLink>
                              </SheetClose>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <SheetClose key={item.name} asChild>
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              `flex items-center gap-2 pt-2 w-full ${
                                isActive
                                  ? "text-primary bg-primary/10"
                                  : "text-foreground"
                              }`
                            }
                            {...(item.prefetch ? { prefetch: "true" } : {})}
                          >
                            {item.name}
                          </NavLink>
                        </SheetClose>
                      )
                    )}
                  </CollapsibleContent>
                </Collapsible>
              )
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
