import './fancy-highlight-link.scss'

const FancyLink = ({children, url}:any) => {
    return <a href={url} className="fancy-text">{children}</a>
}
export default FancyLink;