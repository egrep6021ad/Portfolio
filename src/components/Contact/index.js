import Web from "./Web";
import Mobile from "./Mobile";

const frame = window.innerWidth
const Contact = () => (

    frame > 500 ?  <Web /> : <Mobile />
)

export default Contact