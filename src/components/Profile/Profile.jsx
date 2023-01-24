import PropTypes from 'prop-types';
import {
  Card,
  Stats,
  StatsItem,
  Avatar,
  Name,
  Tag,
  Location,
  Lable,
  Quantity,
} from 'components/Profile/Profile.styled';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <Card>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{userName}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <StatsItem>
          <Lable>Followers</Lable>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Lable>Views</Lable>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Lable>Likes</Lable>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
