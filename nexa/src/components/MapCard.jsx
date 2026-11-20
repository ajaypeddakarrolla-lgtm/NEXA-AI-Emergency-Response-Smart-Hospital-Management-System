import {MapContainer,TileLayer,CircleMarker,Polyline,Tooltip} from 'react-leaflet';
const P={patient:[17.4239,78.4483],hospital:[17.4126,78.4071],ambulance:[17.4300,78.4300]};
export default function MapCard({height='h-72'}){return <div className={`${height} rounded-2xl overflow-hidden border border-line`}><MapContainer center={[17.425,78.43]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
<TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
<Polyline positions={[P.ambulance,P.patient,P.hospital]} pathOptions={{color:'#2563EB',weight:4,dashArray:'8 8'}}/>
{[['Patient',P.patient,'#EF4444'],['Ambulance AMB-102',P.ambulance,'#2563EB'],['City Heart Institute',P.hospital,'#10B981']].map(([n,p,c])=><CircleMarker key={n} center={p} radius={9} pathOptions={{color:'#fff',weight:3,fillColor:c,fillOpacity:1}}><Tooltip>{n}</Tooltip></CircleMarker>)}
</MapContainer></div>}
