import { useNavigate } from 'react-router-dom'
export default function NotFound(){const nav=useNavigate();return <div className="empty"><h1>404</h1><h2>Siden blev ikke fundet</h2><button className="btn primary" onClick={()=>nav('/')}>Til hubben</button></div>}
