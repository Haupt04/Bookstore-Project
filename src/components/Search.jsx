import { RiCloseLine, RiSearchLine } from "@remixicon/react"


const Search = ({onClose}) => {
  return (
    <div className="search show-search" id="search-content">
        <form action="" className="search__form">
            <RiSearchLine className="search__icon" />
            <input type="search" placeholder="What are you looking for?" className="search__input" />
        </form>

        <RiCloseLine className="search__close" id="search-close" onClick={onClose} />
    </div>
  )
}

export default Search