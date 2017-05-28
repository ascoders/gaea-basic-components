import * as React from "react"
import * as ReactDOM from "react-dom"
import { Props, State } from "./select.type"

export class Select extends React.Component<Props, State> {
  public static defaultProps = new Props()
  public state = new State()

  public render() {
    const Options = this.props.options.map((option, index) => {
      return <option value={option.value} key={index}>{option.name}</option>
    })

    return (
      <select defaultValue={this.props.defaultValue} onChange={this.handleChange}>
        {Options}
      </select>
    )
  }

  private handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    this.props.onChange(event.currentTarget.value as string)
  }
}
