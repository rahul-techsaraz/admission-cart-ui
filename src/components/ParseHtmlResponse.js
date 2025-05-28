import React, { useState } from 'react';

/**
 * ReadMoreHTML
 * @param {string} htmlContent - HTML string (e.g., from CMS or Quill)
 * @param {number} maxLength - Maximum character limit before truncation (excluding tags)
 * @param {string} readMoreText - Label for expanding content
 * @param {string} readLessText - Label for collapsing content
 */
const ReadMoreHTML = ({
  htmlContent = '',
  maxLength = 300,
  readMoreText = 'Read More',
  readLessText = 'Read Less',
  className = '',
  readMoreBtnClass = 'btn course-details-readmore-btn',
  btnDivClassName = 'text-start mt-3',
  renderAsPlainText = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  if (!htmlContent) return null;

  const plainText = htmlContent.replace(/<[^>]+>/g, '');
  const slicedText = plainText.slice(0, maxLength)
  const isLong = plainText.length > maxLength;
  const textDisplay = (expanded || !isLong) ? plainText : slicedText

  // Find the position of the character at maxLength in the plain text
  const limitIndex = plainText[maxLength];
  const sliceIndex = htmlContent.indexOf(limitIndex);

  const shortHTML = sliceIndex !== -1 ? htmlContent.slice(0, sliceIndex) + '...' : htmlContent;
  

  return renderAsPlainText  ? <>{textDisplay}</> :
      (<div className={className}>
        <div
          dangerouslySetInnerHTML={{
            __html: expanded || !isLong ? htmlContent : shortHTML,
          }}
        />
        {isLong && (
          <div className={btnDivClassName}>
            <button className={readMoreBtnClass} onClick={() => setExpanded(!expanded)}>
              {expanded ? readLessText : readMoreText}
            </button>
          </div>
        )}
      </div>)
      
      }
  

export default ReadMoreHTML;
