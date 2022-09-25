import {Warranty} from "../helpers/warranty/Warranty";
import {Search} from "../helpers/search/Search";
import {PoolsContainer} from "./poolscontainer/PoolsContainer";
import {Filter} from "./sidebar/filter/Filter";

export const Fiber = () => {
    return (
        <main className="fiber__container sidebar__container">
            <section>
                <Warranty duration={10} />
                <Search />
                <PoolsContainer />
            </section>
            <aside>
                <Filter />
            </aside>
        </main>
    )
}