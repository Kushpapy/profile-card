import styled from "styled-components";

const StyledApp = styled.div`
  width: 40rem;
  background-color: #fff;
  border-radius: 11px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;

  & img {
    display: block;
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    border: 3px solid #fff;
    position: absolute;
    bottom: -65%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* transform: translate(-50%, -50%);  */
  }

  & hr {
    border: 0.5px solid var(--Dark-gray);
    height: 0;
  }
`;

const SvgBox = styled.div`
  width: 100%;
  height: 12rem;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const TextBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  & p {
    color: var(--Dark-grayish-blue);
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const H4 = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
`;

const StatBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`;

const Stat = styled.div`
  & span {
    color: var(--Dark-gray);
    font-size: 1rem;
  }
`;

const Location = styled.p`
  & {
    color: var(--Dark-grayish-blue);
    font-size: 1.2rem;
    text-align: center;
  }
`;

const stats = [
  { stat: "80K", name: "Followers" },
  { stat: "803K", name: "Likes" },
  { stat: "1.4K", name: " Photos" },
];

function App() {
  return (
    <StyledApp>
      <SvgBox $background="/bg-pattern-card.svg">
        <img src="/image-victor.jpg" alt="" />
      </SvgBox>

      <TextBox>
        <H4>Victor Crest</H4>
        <p>26</p>
      </TextBox>
      <Location>London</Location>
      <hr />
      <StatBox>
        {stats.map((s, i) => (
          <Stat key={i}>
            <H4>{s.stat}</H4>
            <span>{s.name}</span>
          </Stat>
        ))}
      </StatBox>
    </StyledApp>
  );
}

export default App;
