import { Button, Text } from '@timber/pines'
import { Component, Signal } from '@timberjs/timber'

export default class App extends Component {
  initialize(): void {
    const todos = Signal.from([])
    const button = Button.withLabel('New Button').click(() => {
      todos.set(todos.get().concat(todos.get().length))
    })
    const text = new Text('')
    this.add(
      button.effect(() => {
        text.setValue(todos.get().length.toString())
      }, todos),
      text
    )
  }
}
