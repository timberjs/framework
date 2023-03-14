import { Background, FontSize, Padding, Palette } from '@timberjs/appearance'
import { Component } from '@timberjs/dom'
import { Container, Heading, Navbar, Paragraph } from '@timberjs/user-interface'

export default class App extends Component {
  materialize(): void {
    this.add(
      new Container()
        .withAppearance((appearance) =>
          appearance.use(
            Background.usingColor(Palette.zinc.variant(100)),
            Padding.top(96)
          )
        )
        .add(
          new Navbar().fixed.brand(
            Heading.withTextAndOrderAndSize('Timber', 1, FontSize.extraLarge3)
          ),
          Heading.withTextAndOrderAndSize(
            'Introducing Timber: The JavaScript Framework for Single Page Applications'
          ),
          Paragraph.usingText(
            'Are you tired of clunky, slow-loading websites that take forever to navigate? Do you want to create sleek, modern web applications that provide a seamless user experience? Look no further than Timber, the JavaScript framework designed specifically for single page applications.'
          ),
          Paragraph.usingText(
            'With Timber, you can create dynamic, responsive web applications that load lightning-fast and provide a seamless user experience. Our framework allows you to build applications that feel like native apps, with smooth transitions and no page reloads.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          ),
          Paragraph.usingText(
            'Timber is easy to learn and use, even for those new to web development. Our comprehensive documentation and intuitive API make it a breeze to get started. And for experienced developers, our flexible architecture allows for endless customization and extensibility.'
          )
        )
    )

    // .addComponent(
    //   Layout.withComponents(
    //     Heading.withText('Timber').withConstraint(
    //       (constraint) => constraint.alignCenter.grow
    //     )
    //   )
    // )

    // const todos = Signal.from([])
    // const button = Button.withLabel('New Button').click(() => {
    //   todos.set(todos.get().concat(todos.get().length))
    // })
    // const text = new Text('')
  }
}
