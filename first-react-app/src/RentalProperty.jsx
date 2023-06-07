import './RentalProperty.css'
import Property from './Property.jsx'

export default function RentalProperty({ data }) {
    return (
        <div className="PropertyList">
            { data.map((el)=>{return <Property {...el}   key = {el.id}/>})}
        </div>
    );
}