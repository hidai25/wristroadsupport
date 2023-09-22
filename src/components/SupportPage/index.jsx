import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 20px;
`;

const Features = styled.div`
  margin-top: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
`;

const FAQItem = styled.div`
  margin-top: 20px;
`;

const FAQQuestion = styled.h3`
  color: #444;
`;

const FAQAnswer = styled.p`
  font-style: italic;
  color: #777;
`;

const Support = styled.div`
  margin-top: 30px;
`;

function SupportPage() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  return (
    <animated.div style={fadeIn}>
      <Container>
        <Title>[Your Game's Name] - Support Page</Title>
        <Description>"[Your Game's Name]" is an engaging car game for the Apple Watch where players navigate their vehicle to avoid obstacles and progress through three challenging levels.</Description>
        <Features>
          <h2>Features:</h2>
          <FeatureList>
            <FeatureItem>• Intuitive controls designed specifically for the Apple Watch interface.</FeatureItem>
            <FeatureItem>• Three unique levels with increasing difficulty.</FeatureItem>
            <FeatureItem>• Eye-catching graphics and immersive gameplay.</FeatureItem>
          </FeatureList>
        </Features>
        <div>
          <h2>How to Play:</h2>
          <p>• Tilt your wrist to steer the car.</p>
          <p>• Avoid all obstacles to progress to the next level.</p>
          <p>• Reach the end of level 3 to win!</p>
        </div>
        <div>
          <h2>Frequently Asked Questions (FAQ):</h2>
          <FAQItem>
            <FAQQuestion>How can I restart a level?</FAQQuestion>
            <FAQAnswer>Answer: [Provide the steps here.]</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>The game seems slow. What can I do?</FAQQuestion>
            <FAQAnswer>Answer: Ensure your Apple Watch is updated to the latest OS. If the problem persists, try restarting your watch.</FAQAnswer>
          </FAQItem>
          <FAQItem>
            <FAQQuestion>I found a bug/glitch. How can I report it?</FAQQuestion>
            <FAQAnswer>Answer: Please contact our support team with a description of the bug, and we'll address it as soon as possible.</FAQAnswer>
          </FAQItem>
        </div>
        <Support>
          <h2>Support & Contact:</h2>
          <p>If you have any issues, questions, or suggestions regarding "[Your Game's Name]", please feel free to reach out to us at [Your Support Email Address]. We're here to help and always looking for feedback to improve our game.</p>
        </Support>
        <div>
          <h2>Updates & Changelog:</h2>
          <p>Keep an eye on this section for any game updates, improvements, and fixes.</p>
        </div>
      </Container>
    </animated.div>
  );
}

export default SupportPage;
