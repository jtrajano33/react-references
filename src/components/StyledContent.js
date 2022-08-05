const StyledContent = ({title, content}) => {
    return(
        <p style={{fontStyle: "italic", margin:1}}>
            <span style={{fontWeight: "bold"}}>
                {title}:
            </span>
            {content}
        </p>
    )
}

export default StyledContent;