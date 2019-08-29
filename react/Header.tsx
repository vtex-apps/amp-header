import React from 'react'
import { IconMenu, IconSearch } from 'vtex.store-icons'
import * as Amp from 'react-amphtml'

const Header = () => {
  return (
    <React.Fragment>
      <header className="ph5 w-100 flex center justify-center pb4 pv2 bb bw1 b--muted-4">
        <div className="flex-wrap flex w-100 justify-between items-center">
          {
            // @ts-ignore
            <button
              className="bn bg-base pa4 flex items-center"
              on="tap:menu-sidebar.open"
            >
              <IconMenu />
            </button>
          }
          <a className="pl3" href="/">
            store theme
          </a>
          <div className="ml-auto">
            <IconSearch />
          </div>
          <input
            className="w-100 ma0 border-box bw1 br2  b--solid outline-0 c-on-base bg-base b--muted-4 hover-b--muted-3 f5 pv4 ph6 pr8"
            type="text"
            placeholder="Buscar"
          />
        </div>
      </header>
      <Amp.AmpSidebar
        specName="default"
        id="menu-sidebar"
        className="relative bg-base"
        side="left"
        layout="nodisplay"
      >
        {
          // @ts-ignore
          <button
            className="absolute top-0 mt3 ml3 left-0 pa4 bg-base bn"
            on="tap:menu-sidebar.close"
          >
            ×
          </button>
        }
        <Amp.AmpAccordion className="mt8">
          <section className="bg-base bl-0 br-0 ba b--muted-4">
            <h2 className="bg-base c-on-base pa4 bn t-action">Eletrônicos</h2>
            <p>aaaa</p>
          </section>
          <section className="bg-base bl-0 br-0 ba b--muted-4">
            <h2 className="bg-base c-on-base pa4 bn t-action">Veículos</h2>
            <p>bbbb</p>
          </section>
        </Amp.AmpAccordion>
      </Amp.AmpSidebar>
    </React.Fragment>
  )
}

export default Header
