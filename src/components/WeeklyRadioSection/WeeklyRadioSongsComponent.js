import React from 'react';
import {
  WeeklyRadioSongsHeaderRow,
  WeeklyRadioSongsIcon,
  WeeklyRadioSongsIconWrapper,
  WeeklyRadioSongsListItem,
  WeeklyRadioSongsListRow,
  WeeklyRadioSongsListTable,
  WeeklyRadioSongsTitle,
  WeeklyRadioSongsTitleInfo,
  WeeklyRadioSongsTitleWrapper,
  WeeklyRadioSongsWrapper,
  WeeklyRadioSongsYoutubeLink,
} from "./WeeklyRadioElement";

class WeeklyRadioSongsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

        return (
          <WeeklyRadioSongsWrapper id={this.props.weeklyRadioElement?.id}>
            <WeeklyRadioSongsHeaderRow>
              <WeeklyRadioSongsIconWrapper>
                <WeeklyRadioSongsIcon
                  width="180px"
                  src={this.props.weeklyRadioElement?.img}
                  alt={this.props.weeklyRadioElement?.alt}
                />
              </WeeklyRadioSongsIconWrapper>
              <WeeklyRadioSongsTitleWrapper>
                <WeeklyRadioSongsTitle>
                  {this.props.weeklyRadioElement?.title}
                </WeeklyRadioSongsTitle>
                <WeeklyRadioSongsTitleInfo>
                  Released:{" "}
                  {this.props.weeklyRadioElement?.releaseDate?.toLocaleDateString(
                    "en-US",
                    options
                  )}
                </WeeklyRadioSongsTitleInfo>
                <WeeklyRadioSongsYoutubeLink
                  href={this.props.weeklyRadioElement?.url}
                >
                  Listen now on YouTube
                </WeeklyRadioSongsYoutubeLink>
              </WeeklyRadioSongsTitleWrapper>
            </WeeklyRadioSongsHeaderRow>
            <WeeklyRadioSongsListRow>
              <WeeklyRadioSongsListTable>
                {this.props.weeklyRadioElement?.SongsList?.map((song, index) => {
                  return (
                    <WeeklyRadioSongsListItem index={index} key={index}>
                      {song.title} - {song.artist}
                    </WeeklyRadioSongsListItem>
                  );
                })}
              </WeeklyRadioSongsListTable>
            </WeeklyRadioSongsListRow>
          </WeeklyRadioSongsWrapper>
        );
    }
}

export default WeeklyRadioSongsComponent;