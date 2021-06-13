import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./subscriptionsScreen.scss";
import { getVideosByChannel } from "../../redux/actions/videos.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";

const SubscriptionsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel());
  }, [dispatch]);

  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );

  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal video={video} key={video.Id} subScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionsScreen;
