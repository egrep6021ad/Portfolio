
import Mobile from './Mobile'
import Web from './Web'

const frame = window.innerWidth

const About = () => (
    frame > 500 ?  <Web /> : <Mobile />
)
export default About