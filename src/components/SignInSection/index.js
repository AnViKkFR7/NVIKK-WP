import React from 'react'
import {
  SignInButton,
  SignInCard,
  SignInContainer,
  SignInImage,
  SignInImageWrapper,
  SignInInfoWrapper,
  SignInText,
  SignInWrapper,
  SMIcon,
  OrBr,
  PwInput,
  UserInput,
  WelcomeText,
  SocialMediaRow,
  SignInInfoRow,
  InputGroup,
  InputGrupPretend,
  InputImageSpan,
  InputImage,
  SignInButtonLink
} from "./SignInElement";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

const SignInSection = ({imgStory, uriFacebook, uriTwitter, uriGoogle, img, imgUser, imgPw, altPw, altUser, alt, welcomeText, loginText, accountText, socialMediaText, signupText}) => {
  return (
    <>
      <SignInContainer>
        <SignInWrapper>
          <SignInCard>
            <SignInInfoWrapper>
              <SignInInfoRow>
                <WelcomeText>{welcomeText}</WelcomeText>
              </SignInInfoRow>
              <SignInInfoRow>
                <SignInText>{loginText}</SignInText>
              </SignInInfoRow>
              <SignInInfoRow>
                <InputGroup className="input-group mb-3 border">
                  <InputGrupPretend className="input-group-pretend bg-transparent">
                    <InputImageSpan className="input-group-text bg-transparent  border-0">
                      <InputImage src={imgUser} alt={altUser} />
                    </InputImageSpan>
                  </InputGrupPretend>
                  <UserInput
                    type="text"
                    className="form-control border-0"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </SignInInfoRow>
              <SignInInfoRow>
                <InputGroup className="input-group mb-3 border">
                  <InputGrupPretend className="input-group-pretend bg-transparent">
                    <InputImageSpan className="input-group-text bg-transparent border-0">
                      <InputImage src={imgPw} alt={altPw} />
                    </InputImageSpan>
                  </InputGrupPretend>
                  <PwInput
                    type="password"
                    className="form-control border-0"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </SignInInfoRow>
              <SignInInfoRow>
                <SignInButtonLink to="/">
                  <SignInButton>SIGN IN</SignInButton>
                </SignInButtonLink>
              </SignInInfoRow>
              <SignInInfoRow>
                <OrBr> Or </OrBr>
              </SignInInfoRow>
              <SignInInfoRow>
                <SignInText>{socialMediaText}</SignInText>
              </SignInInfoRow>
              <SocialMediaRow>
                <SMIcon></SMIcon>
                <SMIcon>
                  <a
                    href={uriFacebook}
                    target="_blank"
                    rel="noreferrer"
                    data-uk-tooltip
                    title="Facebook"
                    pos="bottom"
                  >
                    <img src="data:image/png;base64,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" alt="Facebook Logo"/>
                  </a>
                </SMIcon>
                <SMIcon>
                  <a
                    href={uriGoogle}
                    target="_blank"
                    rel="noreferrer"
                    data-uk-tooltip
                    title="Google"
                    pos="bottom"
                  >
                    <img src="data:image/png;base64,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" alt="Google+ Logo" />
                  </a>
                </SMIcon>
                <SMIcon>
                  <a
                    href={uriTwitter}
                    target="_blank"
                    rel="noreferrer"
                    data-uk-tooltip
                    title="Twitter"
                    pos="bottom"
                  >
                    <img src="data:image/png;base64,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" alt="Twitter Logo"/>
                  </a>
                </SMIcon>
                <SMIcon></SMIcon>
              </SocialMediaRow>
            </SignInInfoWrapper>
            <SignInImageWrapper>
              <SignInImage src={img} alt={alt} />
            </SignInImageWrapper>
          </SignInCard>
        </SignInWrapper>
      </SignInContainer>
    </>
  );
}

export default SignInSection;