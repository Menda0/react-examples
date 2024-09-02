import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
  return (
    <div>
      <h1>My List</h1>
      <div>
        <div>
          <img src="https://marcomendao.betacode.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.680c1121.jpg&w=64&q=75"/>
        </div>
        <div>
          <div>Marco Mendao</div>
          <div>CTO & Co-Founder at Betacode.tech</div>
        </div>
        <div>
          <FontAwesomeIcon icon={faAnglesRight} size='2xs' className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
