export mindustry.entities.abilities.ability;

import arc.*;
import arc.scene.ui.layout.*;
import mindustry.gen.*;
import mindustry.ui.*;

function name(Ability) {
    //Testing on how to use JavaScript.
    let display = true;

    this.update(Unit.unit)

    this.draw(Unit.unit)

    this.death(Unit.unit)

    this.created(Unit.unit)

    this.init(UnitType.type)

    this.displayBars(Unit.unit, Table.bars)

    function name(display(Table.t)){
        t.table(Styles.grayPanel, p => {
          p.createElement(("[accent]" + localized()).padBottom(4).center().top().expandX();
          p.row();
          p.left().top().defaults().left();
          addStats(p);
        })?.pad(5).margin(10).growX().top().uniformX();
    }
}
