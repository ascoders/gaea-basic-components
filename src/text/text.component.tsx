import * as React from "react"
import * as ReactDOM from "react-dom"
import { Props, State } from "./text.type"

export class Text extends React.Component<Props, State> {
  public static defaultProps = new Props()
  public state = new State()

  public render() {
    return (
      <span style={this.props.style}>
        {this.props.text}
      </span>
    )
  }
}
