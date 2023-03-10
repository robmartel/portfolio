import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = ({image}) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, <br />
        Welcome to <br />
        my Portfolio
      </SectionTitle>
      <SectionText>
        I am a full-stack developer ... 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;