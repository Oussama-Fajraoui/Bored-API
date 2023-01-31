import axios from "axios";
import { useState } from "react";
import MainDiv, { Div } from "../styles/Home.styled";
import { InputBox, InputRange } from "../styles/InputBox.styled";
import { LinkStyledComp } from "../styles/Link.styled";
import Section, { Span } from "../styles/Section.styled";
import { ThreeDots } from "react-loader-spinner";
import "./Main.css";
import ButtonHover from "../components/ButtonHover";

const Home = () => {
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [accessibility, setAccessibility] = useState(0);
  const [participants, setParticipants] = useState(1);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const url = `https://www.boredapi.com/api/activity?type=${type}&aaccessibility=${accessibility}&participants=${participants}&price=${price}`;

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios(url);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);
  return (
    <>
      <div className="area">
        <ul className="circles">
          <Div>
            <MainDiv>
              <h1>Bored App</h1>

              <Section>
                <Span>Type of the activity</Span>
                education, recreational, social, diy, charity, cooking,
                relaxation, music, busywork etc.
              </Section>
              <InputBox
                type="text"
                placeholder="Enter type of the activity"
                onChange={(e) => setType(e.target.value)}
              />
              <label>Accessibility : {accessibility}</label>
              <InputRange
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(e) => setAccessibility(e.target.value / 10)}
              />
              <label>Participants: {participants}</label>
              <InputRange
                type="range"
                min={1}
                max={6}
                defaultValue={1}
                onChange={(e) => setParticipants(e.target.value)}
              />

              <label>Price: {price}</label>
              <InputRange
                type="range"
                min={0}
                max={10}
                defaultValue={0}
                onChange={(e) => setPrice(e.target.value / 10)}
              />

              {/* <Button onClick={getData}>Create Activity</Button> */}

              <div onClick={getData}>
                <ButtonHover text="Create Activity" />
              </div>

              {loading ? (
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#ac3cb6"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                <h2>
                  {data?.activity ||
                    "No activity found with the specified parameters"}
                </h2>
              )}

              <InputBox
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />

              <h4 style={{ color: "#ff9900" }}>
                İf you want, Enter your e-mail and we will send you this
                activity 😉
              </h4>

              <LinkStyledComp
                href={`mailto:${email}?subject=Daily%20Activity&body=Don't%20forget!!!%20${data?.activity}%20😊`}>
                Send Mail
              </LinkStyledComp>
              <p>Oussama Fajraoui | {new Date().getFullYear()}</p>
            </MainDiv>
          </Div>

          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </>
  );
};

export default Home;