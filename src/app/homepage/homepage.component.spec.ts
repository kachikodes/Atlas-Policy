import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent]
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function onSearchData() {
  var filter, ul, li, a, i, txtValue;
  let searching_box = document.getElementById("search");
  console.log(searching_box.value);
  filter = searching_box.value.toUpperCase();
  ul = document.getElementById("table_preferred");
  li = ul.getElementsByTagName("tr");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("td")[3];
    txtValue = a.textContent || a.innerText;

    b = li[i].getElementsByTagName("td")[0];
    txtValue2 = b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
