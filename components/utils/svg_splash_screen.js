const svg = {
    img1: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgogICAgICA8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CgogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgd2hlcmUgdGhlICJyZWd1bGFyIiBzY2hlbWUgaXMgZGFyayAqLwogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgYSBsaWdodCBzY2hlbWUgYW5kIGFsc28gZW5hYmxlZCBhIGRhcmsgc2NoZW1lICovCgogICAgICAgIC8qIGRlYWwgd2l0aCBsaWdodCBzY2hlbWUgZmlyc3QgKi8KICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkgewogICAgICAgICAgOnJvb3QgewogICAgICAgICAgICAtLXByaW1hcnk6ICMxODI0MzA7CiAgICAgICAgICAgIC0tc2Vjb25kYXJ5OiAjZmZmZmZmOwogICAgICAgICAgICAtLXRlcnRpYXJ5OiAjMURBMUYyOwogICAgICAgICAgICAtLXF1YXRlcm5hcnk6ICMxREExRjI7CiAgICAgICAgICAgIC0taGlnaGxpZ2h0OiAjZmZkMDNmOwogICAgICAgICAgICAtLXN1Y2Nlc3M6ICMwMDg5NTE7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvKiB0aGVuIGRlYWwgd2l0aCBkYXJrIHNjaGVtZSAqLwogICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICAgICAgICAgIDpyb290IHsKICAgICAgICAgICAgLS1wcmltYXJ5OiAjMTgyNDMwOwogICAgICAgICAgICAtLXNlY29uZGFyeTogI2ZmZmZmZjsKICAgICAgICAgICAgLS10ZXJ0aWFyeTogIzFEQTFGMjsKICAgICAgICAgICAgLS1xdWF0ZXJuYXJ5OiAjMURBMUYyOwogICAgICAgICAgICAtLWhpZ2hsaWdodDogI2ZmZDAzZjsKICAgICAgICAgICAgLS1zdWNjZXNzOiAjMDA4OTUxOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgLyogdGhlc2Ugc3R5bGVzIG5lZWQgdG8gbGl2ZSBoZXJlIGJlY2F1c2UgdGhlIFNWRyBoYXMgYSBkaWZmZXJlbnQgc2NvcGUgKi8KICAgICAgICAuZG90cyB7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tYW5pbWF0aW9uLXN0YXRlKTsKICAgICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7CiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgcjogbWF4KDF2dywgMTFweCk7CiAgICAgICAgICBjeTogNTAlOwogICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKSBvcGFjaXR5KDAuODUpOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6Zmlyc3QtY2hpbGQgewogICAgICAgICAgZmlsbDogdmFyKC0tcXVhdGVybmFyeSk7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoMikgewogICAgICAgICAgZmlsbDogdmFyKC0tcXVhdGVybmFyeSk7CiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMTVzOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDMpIHsKICAgICAgICAgIGZpbGw6IHZhcigtLWhpZ2hsaWdodCk7CiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoNCkgewogICAgICAgICAgZmlsbDogdmFyKC0tdGVydGlhcnkpOwogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjQ1czsKICAgICAgICB9CgogICAgICAgIC5kb3RzOm50aC1jaGlsZCg1KSB7CiAgICAgICAgICBmaWxsOiB2YXIoLS10ZXJ0aWFyeSk7CiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7CiAgICAgICAgfQoKICAgICAgICBAa2V5ZnJhbWVzIGxvYWRlciB7CiAgICAgICAgICAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICAgICAgICB9CiAgICAgICAgICA0NSUgewogICAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7CiAgICAgICAgICB9CiAgICAgICAgICA2NSUgewogICAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7CiAgICAgICAgICB9CiAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgb3BhY2l0eTogMDsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIDwvc3R5bGU+CgogICAgICA8ZyBjbGFzcz0iY29udGFpbmVyIj4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iMzB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI0MHZ3Ii8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjUwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNjB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI3MHZ3Ii8+CiAgICAgIDwvZz4KICAgIDwvc3ZnPg==",

    img2: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSItLWFuaW1hdGlvbi1zdGF0ZTogcnVubmluZzsiPgogICAgICA8c3R5bGU+CiAgICAgICAgOnJvb3QgewogICAgICAgICAgLS1hbmltYXRpb24tc3RhdGU6IHBhdXNlZDsKICAgICAgICB9CgogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgd2hlcmUgdGhlICJyZWd1bGFyIiBzY2hlbWUgaXMgZGFyayAqLwogICAgICAgIC8qIHVzZXIgcGlja2VkIGEgdGhlbWUgYSBsaWdodCBzY2hlbWUgYW5kIGFsc28gZW5hYmxlZCBhIGRhcmsgc2NoZW1lICovCgogICAgICAgIC8qIGRlYWwgd2l0aCBsaWdodCBzY2hlbWUgZmlyc3QgKi8KICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkgewogICAgICAgICAgOnJvb3QgewogICAgICAgICAgICAtLXByaW1hcnk6ICMyMjIyMjI7CiAgICAgICAgICAgIC0tc2Vjb25kYXJ5OiAjZmZmZmZmOwogICAgICAgICAgICAtLXRlcnRpYXJ5OiAjMDA4OGNjOwogICAgICAgICAgICAtLXF1YXRlcm5hcnk6ICNlNDU3MzU7CiAgICAgICAgICAgIC0taGlnaGxpZ2h0OiAjZmZmZjRkOwogICAgICAgICAgICAtLXN1Y2Nlc3M6ICMwMDk5MDA7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvKiB0aGVuIGRlYWwgd2l0aCBkYXJrIHNjaGVtZSAqLwogICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICAgICAgICAgIDpyb290IHsKICAgICAgICAgICAgLS1wcmltYXJ5OiAjMjIyMjIyOwogICAgICAgICAgICAtLXNlY29uZGFyeTogI2ZmZmZmZjsKICAgICAgICAgICAgLS10ZXJ0aWFyeTogIzAwODhjYzsKICAgICAgICAgICAgLS1xdWF0ZXJuYXJ5OiAjZTQ1NzM1OwogICAgICAgICAgICAtLWhpZ2hsaWdodDogI2ZmZmY0ZDsKICAgICAgICAgICAgLS1zdWNjZXNzOiAjMDA5OTAwOwogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgLyogdGhlc2Ugc3R5bGVzIG5lZWQgdG8gbGl2ZSBoZXJlIGJlY2F1c2UgdGhlIFNWRyBoYXMgYSBkaWZmZXJlbnQgc2NvcGUgKi8KICAgICAgICAuZG90cyB7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogdmFyKC0tYW5pbWF0aW9uLXN0YXRlKTsKICAgICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICAgIHN0cm9rZS13aWR0aDogMC41cHg7CiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgcjogbWF4KDF2dywgMTFweCk7CiAgICAgICAgICBjeTogNTAlOwogICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgyKSBvcGFjaXR5KDAuODUpOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6Zmlyc3QtY2hpbGQgewogICAgICAgICAgZmlsbDogdmFyKC0tcXVhdGVybmFyeSk7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoMikgewogICAgICAgICAgZmlsbDogdmFyKC0tcXVhdGVybmFyeSk7CiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMTVzOwogICAgICAgIH0KCiAgICAgICAgLmRvdHM6bnRoLWNoaWxkKDMpIHsKICAgICAgICAgIGZpbGw6IHZhcigtLWhpZ2hsaWdodCk7CiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7CiAgICAgICAgfQoKICAgICAgICAuZG90czpudGgtY2hpbGQoNCkgewogICAgICAgICAgZmlsbDogdmFyKC0tdGVydGlhcnkpOwogICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjQ1czsKICAgICAgICB9CgogICAgICAgIC5kb3RzOm50aC1jaGlsZCg1KSB7CiAgICAgICAgICBmaWxsOiB2YXIoLS10ZXJ0aWFyeSk7CiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7CiAgICAgICAgfQoKICAgICAgICBAa2V5ZnJhbWVzIGxvYWRlciB7CiAgICAgICAgICAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7CiAgICAgICAgICB9CiAgICAgICAgICA0NSUgewogICAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7CiAgICAgICAgICB9CiAgICAgICAgICA2NSUgewogICAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7CiAgICAgICAgICB9CiAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgb3BhY2l0eTogMDsKICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIDwvc3R5bGU+CgogICAgICA8ZyBjbGFzcz0iY29udGFpbmVyIj4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iMzB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI0MHZ3Ii8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iZG90cyIgY3g9IjUwdnciLz4KICAgICAgICA8Y2lyY2xlIGNsYXNzPSJkb3RzIiBjeD0iNjB2dyIvPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImRvdHMiIGN4PSI3MHZ3Ii8+CiAgICAgIDwvZz4KICAgIDwvc3ZnPg=="
}

export default svg