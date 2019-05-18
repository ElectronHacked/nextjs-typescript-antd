import React from 'react';
import { Card } from 'antd';
import { IComment } from 'models';
import './styles.scss';

interface IProps {
  readonly comment: IComment;
}

const CommentItem: React.SFC<IProps> = ({ comment }) => {
  const { name, body } = comment;

  return (
    <Card className="comment-card" hoverable>
      <div className="comment-item">
        <p className="comment-body">{body}</p>
        <p className="comment-name">{name}</p>
      </div>
    </Card>
  );
};

export default CommentItem;
