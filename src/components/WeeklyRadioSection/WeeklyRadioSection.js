import React from "react";
import {
  WeeklyRadioContainer,
  WeeklyRadioWrapper,
  WeeklyRadioList,
  WeeklyRadioListHeader,
  WeeklyRadioListWrapper,
  WeeklyRadioSongsColWrapper,
  HeaderWrapper,
  WeeklyRadioIcon,
  IconWrapper,
  WeeklyRadioListHeader2
} from "./WeeklyRadioElement";
import WeeklyRadioSongsComponent from './WeeklyRadioSongsComponent'

class WeeklyRadioSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      open: false,
      weeklyRadioElement: {},
      iconSelected: null
    };
  }

  openSongsListModal = (WeeklyRadioElement) => {
    if (this.state.iconSelected !== WeeklyRadioElement?.id) {
      this.setState({
        showModal: true,
        open: true,
        weeklyRadioElement: WeeklyRadioElement,
        iconSelected: WeeklyRadioElement.id
      });
    }
  }

  render() {
    return (
      <>
        <WeeklyRadioContainer id={this.props.weeklyRadioObj.id}>
          <WeeklyRadioWrapper>
            <WeeklyRadioListWrapper>
              <HeaderWrapper>
                <WeeklyRadioListHeader>WEEKLY RADIO</WeeklyRadioListHeader>
                <WeeklyRadioListHeader2>CHAPTERS</WeeklyRadioListHeader2>
              </HeaderWrapper>
              <WeeklyRadioList>
                {
                this.props.weeklyRadioObj.weeklyRadioList?.reverse().map(
                  (WeeklyRadioElement, index) => {
                    return (
                      <IconWrapper key={index}>
                        <WeeklyRadioIcon
                          width="250"
                          height="250"
                          src={WeeklyRadioElement.img}
                          alt={WeeklyRadioElement.alt}
                          selected={WeeklyRadioElement.id === this.state.iconSelected}
                          onClick={() => this.openSongsListModal(WeeklyRadioElement)}
                        />
                      </IconWrapper>
                    )
                  }
                )}
              </WeeklyRadioList>
            </WeeklyRadioListWrapper>
            <WeeklyRadioSongsColWrapper showModal={this.state.showModal} open={this.state.open}>
              <WeeklyRadioSongsComponent weeklyRadioElement={this.state.weeklyRadioElement}/>
            </WeeklyRadioSongsColWrapper>
          </WeeklyRadioWrapper>
        </WeeklyRadioContainer>
      </>
    );
  }
}

export default WeeklyRadioSection;
