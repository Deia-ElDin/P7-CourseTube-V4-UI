import { useContext } from 'react';
import { CourseContext } from '../Course';
import EditButton from '../../../../dependencies/EditButton';

function TopSection() {
  const { id, videoLink, videoImg, videoAlt, videoDuration } = useContext(CourseContext);

  return (
    <figure className="top-section" data-testid="top-section">
      <a href={videoLink} target="_blank" rel="noopener noreferrer">
        <img src={videoImg} alt={videoAlt} />
        <small>{videoDuration}</small>
      </a>

      <EditButton target="course" id={id} />
    </figure>
  );
}

export default TopSection;
