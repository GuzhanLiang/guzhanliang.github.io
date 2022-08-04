import "./portfolioList.scss";

export default function PortfolioList({ id,title,acctive, setSelected }) {
  return (
    <li 
        className={acctive ? "portfolioList acctive":"portfolioList"}
        onClick={() => setSelected(id)}
    >
        {title}
    </li>
  )
}
