import Web from "./Web";
import Mobile from "./Mobile";

const frame = window.innerWidth
const Portfolio = () => (

    frame > 500 ?  <Web /> : <Mobile />
)

export default Portfolio