import React from 'react';
import { IPost } from 'models';
import { Card } from 'antd';
import Link from 'next/link';
import './styles.scss';

export interface IProps {
  readonly post: IPost;
  readonly hasViewCommentsLink?: boolean;
}

const PostItem: React.SFC<IProps> = ({ post, hasViewCommentsLink = true }) => {
  const { id, title, body } = post;

  return (
    <Card
      hoverable
      title={title}
      extra={
        hasViewCommentsLink && (
          <Link href={`/post?id=${id}`}>
            <a>View Comments</a>
          </Link>
        )
      }
    >
      <p>{body}</p>
    </Card>
  );
};

export default PostItem;
