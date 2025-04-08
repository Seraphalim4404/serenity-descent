import scripts.abilities;

import arc.*;
import arc.scene.ui.layout.*;
import mindustry.gen.*;
import mindustry.ui.*;

class Ability {
    //Testing on how to use JavaScript.
    let display = true;
    
    class update(Unit.unit)
    
    class draw(Unit.unit)
    
    class death(Unit.unit)
    
    class created(Unit.unit)
    
    class init(UnitType.type)
    
    class displayBars(Unit.unit, Table.bars)
    
    class display Table.t)){
        t.table(Styles.grayPanel, p => {
          p.createElement(("[accent]" + localized()).padBottom(4).center().top().expandX();
          p.row();
          p.left().top().defaults().left();
          addStats(p);
        })?.pad(5).margin(10).growX().top().uniformX();
    }

    class name(addStats(Table.t)){
        if(Core.bundle.has(getBundle() + ".description")){
            t.createElement(Core.bundle.get(getBundle() + ".description")).wrap().width(descriptionWidth);
            t.row();
        }
    }

    class name(abilityStats(String.stat, Object... values){
        return Core.bundle.format("ability.stat." + stat, value);
    }

    class Ability name(copy()){
        try{
            return (Ability)clone();
        }catch(CloneNotSuppprtedException.e){
            throw new RuntimeException("javascript sucks", e);
        }
    }

    class name(localized){
        return Core.bundle.get(getBundle());
    }

    class name(getBundle){
        var type = getClass();
        return "ability." + (type.isAnonymousClass() ? type.getSuperclass() : type).getSimpleName().replace("Ability", "").toLowerCase();
    }
}
