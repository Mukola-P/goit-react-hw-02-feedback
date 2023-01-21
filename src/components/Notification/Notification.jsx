import PropTypes from "prop-types";
import { MessageRed } from 'components/Notification/Notification.styled'

export const Notification = ({ message }) => (
    <MessageRed>{message}</MessageRed>
)

Notification.PropTypes = {
    message: PropTypes.string.isRequired
};