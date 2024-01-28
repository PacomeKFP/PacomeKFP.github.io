
import { ReactElement, createContext, useState } from "react"
import { Page } from "../Types/Enums";

export interface NavigationContextInterface {
  readonly activePage: Page;
  moveTo: (page: Page) => void;
}

export const NavigationContext = createContext<NavigationContextInterface>({
  activePage: Page.About, moveTo: (page: Page): void => console.log(`Trying to move to ${page}`)
})

export const NavigationContextProvider = ({ children }: { children: ReactElement }) => {

  const [activePage, setActivePage] = useState<Page>(Page.About)

  const moveTo = (page: Page): void => {
    if (activePage != page)
      setActivePage(page)
  }

  return <NavigationContext.Provider value={{ activePage, moveTo }}>
    {children}
  </NavigationContext.Provider>;

}