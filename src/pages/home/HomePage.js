import {Link} from 'react-router-dom'

export default function HomePage(props) {
    const links = [
        {
            name: "API Visualization",
            link: "/visualization"
        },
        {
            name: "Copy to Clipboard",
            link: "/copytoclipboard"
        },
        {
            name: "selfie",
            link: "/selfie"
        }
    ]
    return (
        <div className="homepage">
            <h1>Zolve Assignment</h1>
            <div className="links">
                {
                    links.map((item, index) => (
                        <Link to={item.link} key={index}>{item.name}</Link>
                    ))
                }
            </div>
            <div className="img-container">
                <img src="https://res.cloudinary.com/du0xsvxag/image/upload/v1615002236/10808_o4kkb0.jpg" alt="img" />
            </div>
        </div>
    )
}
