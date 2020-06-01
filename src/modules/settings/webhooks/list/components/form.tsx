import Divider from "material-ui/Divider"
import FontIcon from "material-ui/FontIcon"
import { List, ListItem } from "material-ui/List"
import Paper from "material-ui/Paper"
import React from "react"
import { Link } from "react-router-dom"
import messages from "../../../../../lib/text"

const WebhookItem = ({ webhook }) => {
  const events =
    webhook.events && webhook.events.length > 0
      ? webhook.events.join(", ")
      : "none"
  return (
    <>
      <Divider />
      <Link
        to={`/settings/webhooks/${webhook.id}`}
        style={{ textDecoration: "none" }}
      >
        <ListItem
          rightIcon={
            <FontIcon className="material-icons">keyboard_arrow_right</FontIcon>
          }
          style={!webhook.enabled ? { color: "rgba(0, 0, 0, 0.3)" } : {}}
          primaryText={
            <div className="row">
              <div className="col-xs-6">{webhook.url}</div>
              <div className="col-xs-6" style={{ color: "rgba(0, 0, 0, 0.4)" }}>
                {events}
              </div>
            </div>
          }
        />
      </Link>
    </>
  )
}

export default class WebhooksList extends React.Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const { webhooks } = this.props
    const listItems = webhooks.map((webhook, index) => (
      <WebhookItem key={index} webhook={webhook} />
    ))

    return (
      <>
        <div style={{ margin: 20, color: "rgba(0, 0, 0, 0.52)" }}>
          {messages.webhooksAbout}
        </div>
        <Paper className="paper-box" zDepth={1}>
          <div style={{ width: "100%" }}>
            <List style={{ padding: 0 }}>{listItems}</List>
          </div>
        </Paper>
      </>
    )
  }
}
