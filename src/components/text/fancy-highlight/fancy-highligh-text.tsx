import './fancy-highlight-text.scss'

const FancyText = ({children, url}:any) => {
    return <a href={url} className="fancy-text">{children}</a>
}
export default FancyText;