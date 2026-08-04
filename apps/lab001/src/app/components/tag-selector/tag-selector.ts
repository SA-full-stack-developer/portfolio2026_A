import { Listbox, Option } from '@angular/aria/listbox';
import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-tag-selector',
  imports: [Listbox, Option],
  templateUrl: './tag-selector.html',
  styleUrl: './tag-selector.scss',
})
export class TagSelector {
  readonly tags = signal<string[]>(['angular', 'nestjs', 'rxjs']);
  private readonly selectedTag = signal(this.tags()[0]);
  readonly activeTag = linkedSignal<string, string>({
    source: () => this.selectedTag(),
    computation: (tag) => tag,
    set: (value: string) => {
      const current = this.tags();

      if (!current.includes(value)) {
        this.tags.update((t) => [...t, value]);
      }
      this.selectedTag.set(value);
    },
  });

  readonly activeTagSelection = linkedSignal<string[]>(() => [this.activeTag()]);

  onListboxSelectionChange(selection: string[]) {
    const [first] = selection;
    if (first !== undefined) {
      this.activeTag.set(first);
    }
  }

  onAddTag(event: SubmitEvent) {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).querySelector('input');
    const value = input?.value.trim();
    if (value) {
      this.activeTag.set(value);
      input ? (input.value = '') : null;
    }
  }
}
