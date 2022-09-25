export const GoogleMaps = ({location}) => {
    return (
        <iframe
            title={"Google maps"}
            src={location}
            width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}