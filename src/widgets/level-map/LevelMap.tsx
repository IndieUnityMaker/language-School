import { MapBody } from "./components/map-body/MapBody";
import { MapHeader } from "./components/map-header/MapHeader";

export const LevelMap = () => {
    return (
        <>
            <MapHeader name="Раздел 1" info="Поговорим о еде" />
            <MapBody />
        </>
    );
};
