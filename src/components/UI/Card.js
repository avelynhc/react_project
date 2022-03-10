import classes from './Card.module.css'

const Card = props => {
    //accept className props, so AddUser can use it
    return <div className={`${classes.card} ${props.cssClass}`}>{props.children}</div>
    // used props.children to use info in AddUser
}

export default Card;