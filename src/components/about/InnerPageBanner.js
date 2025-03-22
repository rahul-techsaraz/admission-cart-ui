import { Link } from 'react-router-dom';

export const InnerPageBannet = () => {
  return (
    <section className="inner-pagebanner-section section-padding text-center">
      <div className="container">
        <h1>About</h1>
        {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">About</li>
                </ol>
            </nav> */}
      </div>
    </section>
  );
};
