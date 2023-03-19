import './code.css';
import PaymentCard from './PaymentCard';
import ProfileWrite, { ProfileBox } from './subBox/ProfileWrite';


export default function Code () {
    const codeBlock = `
    const PaymentCardBlock = () => 
    <Div bg="white" shadow="2" rounded="xl" m={i{ b: "1rem" }} p="1.5rem">
        <Div
            border={{ b: "1px solid" }}
            borderColor="gray300"
            p={{ b: "0.75rem" }}
        >
        <Text textSize="title" textWeight="500">
          $1,410.16
        </Text>
        <Text textSize="caption" textColor="light">
          per month
        </Text>
    </Div>
    <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
        <Div>
            <Text textSize="caption" textColor="dark">
              Payment Card
            </Text>
            <Text textSize="caption" textColor="light">
              Component
            </Text>
        </Div> 
    </Div>`;
    // regex pattern for HTML Tag
    // let regex = /<\/?[A-Z][a-z]*/g 
    // let log = codeBlock.match(regex);
    // console.log(typeof codeBlock);
    return (
        <div className="codeContainer">
            <div id="codeEditor">
                <blockquote>
                 <pre>
                  <code>
                    {codeBlock}
                  </code>
                 </pre>
                </blockquote>
            </div>
            <div className="forRealtive">
              {/* <div className="forAbsolute"> */}
                <div className="animation">
                  <PaymentCard />
                  <ProfileBox imgPath={'./images/profileIcon3-girl.png'}/>
                  <ProfileWrite />
                  <PaymentCard />
                  <ProfileBox imgPath={'./images/profileIcon3-girl.png'}/>
                  <ProfileWrite />
                </div>
              {/* </div> */}
            </div>
        </div>
    )
}